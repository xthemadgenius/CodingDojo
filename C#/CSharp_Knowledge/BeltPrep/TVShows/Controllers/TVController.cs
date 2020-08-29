using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using TVShows.Models;

namespace TVShows.Controllers
{
    public class TVController : Controller
    {
        private MyContext _context;

        public TVController(MyContext context)
        {
            _context = context;
        }
        [HttpGet("/shows")]
        public IActionResult Shows()
        {
            int? uId = HttpContext.Session.GetInt32("UserId");
            if(uId == null)
            {
                return RedirectToAction("LogReg", "Credentials");
            }
            ShowsWrapper WMod = new ShowsWrapper
            {
                LoggedUser = _context.Users
                    .Include(u => u.Shows)
                    .ThenInclude(s => s.ShowOnNetworks)
                    .ThenInclude(sn => sn.Network)
                    .FirstOrDefault(u => u.UserId == uId),
                AllShows = _context.Shows
                    .Include(s => s.User)
                    .Include(s => s.ShowOnNetworks)
                    .ThenInclude(sn => sn.Network)
                    .Where(s => s.UserId != uId)
                    .ToList()
            };

            return View("Shows", WMod);
        }

        [HttpGet("/shows/new")]
        public IActionResult NewShow()
        {
            int? uId = HttpContext.Session.GetInt32("UserId");
            if(uId == null)
            {
                return RedirectToAction("LogReg", "Credentials");
            }
            return View("NewShow");
        }

        [HttpPost("/shows/new")]
        public IActionResult CreateShow(Show Form)
        {
            int? uId = HttpContext.Session.GetInt32("UserId");
            if(uId == null)
            {
                return RedirectToAction("LogReg", "Credentials");
            }
            
            if(_context.Shows.Any(s => s.Title == Form.Title))
            {
                ModelState.AddModelError("Title", "A show with that title already exists.");
                return NewShow();
            }

            Form.UserId = (int)uId;

            if(ModelState.IsValid)
            {
                _context.Add(Form);
                _context.SaveChanges();
                return RedirectToAction("Shows");
            }
            return NewShow();
        }

        [HttpGet("/shows/{id}/edit")]
        public IActionResult EditShow(int id)
        {
            int? uId = HttpContext.Session.GetInt32("UserId");
            if(uId == null)
            {
                return RedirectToAction("LogReg", "Credentials");
            }

            Show ToEdit = _context.Shows.FirstOrDefault(s => s.ShowId == id);

            if(ToEdit.UserId != (int)uId)
            {
                return RedirectToAction("Shows");
            }

            return View("EditShow", ToEdit);
        }

        [HttpPost("/shows/{id}/edit")]
        public IActionResult UpdateShow(int id, Show Form)
        {
            int? uId = HttpContext.Session.GetInt32("UserId");
            if(uId == null)
            {
                return RedirectToAction("LogReg", "Credentials");
            }

            if(_context.Shows.Any(s => s.Title == Form.Title && s.ShowId != id))
            {
                ModelState.AddModelError("Title", "A show with that title already exists.");
                return EditShow(id);
            }

            Form.UserId = (int)uId;

            if(ModelState.IsValid)
            {
                Form.ShowId = id;
                _context.Update(Form);
                _context.Entry(Form).Property("CreatedAt").IsModified = false;
                _context.SaveChanges();

                return RedirectToAction("Shows");
            }

            return EditShow(id);
        }

        [HttpGet("/shows/{id}")]
        public IActionResult OneShow(int id)
        {
            int? uId = HttpContext.Session.GetInt32("UserId");
            if(uId == null)
            {
                return RedirectToAction("LogReg", "Credentials");
            }

            Show ToShow = _context.Shows
                .Include(s => s.ShowOnNetworks)
                .ThenInclude(sn => sn.Network)
                .FirstOrDefault(s => s.ShowId == id);

            if(ToShow == null)
            {
                return RedirectToAction("Shows");
            }

            OneShowWrapper WMod = new OneShowWrapper
            {
                LoggedId = (int)uId,
                Show = ToShow,
                AllNetworks = _context.Networks
                    .Include(n => n.ShowOnNetworks)
                    .Where(n => !n.ShowOnNetworks.Any(sn => sn.ShowId == id))
                    .ToList()
            };

            return View("OneShow", WMod);
        }

        [HttpGet("/networks/new")]
        public IActionResult NewNetwork()
        {
            int? uId = HttpContext.Session.GetInt32("UserId");
            if(uId == null)
            {
                return RedirectToAction("LogReg", "Credentials");
            }
            return View("NewNetwork");
        }

        [HttpPost("/networks/new")]
        public IActionResult CreateNetwork(Network Form)
        {
            int? uId = HttpContext.Session.GetInt32("UserId");
            if(uId == null)
            {
                return RedirectToAction("LogReg", "Credentials");
            }

            if(_context.Networks.Any(n => n.Name == Form.Name))
            {
                ModelState.AddModelError("Name", "A network with that name already exists.");
                return NewNetwork();
            }

            if(ModelState.IsValid)
            {
                _context.Add(Form);
                _context.SaveChanges();
                return RedirectToAction("Shows");
            }
            return NewNetwork();
        }

        [HttpPost("/shows/{id}/addnetwork")]
        public IActionResult AddNetworkToShow(int id, OneShowWrapper Form)
        {
            int? uId = HttpContext.Session.GetInt32("UserId");
            if(uId == null)
            {
                return RedirectToAction("LogReg", "Credentials");
            }

            if(!_context.Shows.Any(s => s.ShowId == id))
            {
                return RedirectToAction("Shows");
            }

            Form.AddNetForm.ShowId = id;
            _context.Add(Form.AddNetForm);
            _context.SaveChanges();

            return RedirectToAction("OneShow", new { id = id });


        }

        [HttpGet("/shows/{id}/delete")]
        public IActionResult DeleteShow(int id)
        {
            int? uId = HttpContext.Session.GetInt32("UserId");
            if(uId == null)
            {
                return RedirectToAction("LogReg", "Credentials");
            }

            Show ToDelete = _context.Shows.FirstOrDefault(s => s.ShowId == id);

            if(ToDelete == null || ToDelete.UserId != (int)uId)
            {
                return RedirectToAction("Shows");
            }

            _context.Remove(ToDelete);
            _context.SaveChanges();

            return RedirectToAction("Shows");
        }
    }
}