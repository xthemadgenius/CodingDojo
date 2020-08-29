using System;
using System.Linq;
using System.Collections.Generic;
using EntityIntro.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace EntityIntro.Controllers     //be sure to use your own project's namespace!
{
    public class HomeController : Controller   
    {        
        private MyContext _context;

        public HomeController(MyContext context)
        {
            _context = context;
        }

        //for each route this controller is to handle:
        [HttpGet("")]     //Http Method and the route
        public IActionResult Index() //When in doubt, use IActionResult
        {
            IndexWrapper WMod = new IndexWrapper();
            WMod.TableModel = _context.Intruders.ToList();
            return View("Index", WMod); //or whatever you want to return
        }

        [HttpGet("/intruder/{id}")]
        public IActionResult OneIntruder(int? id)
        {
            Intruder ToDisplay = _context.Intruders
                .FirstOrDefault(i => i.IntruderId == id);

            if(ToDisplay == null)
            {
                return RedirectToAction("Index");
            }

            return View("OneIntruder", ToDisplay);
        }

        [HttpPost("/intruder/update/{id}")]
        public IActionResult UpdateIntruder(int id, Intruder Form)
        {
            // Intruder ToUpdate = _context.Intruders.FirstOrDefault(i => i.IntruderId == id);

            // ToUpdate.Name = Form.Name;
            // ToUpdate.Age = Form.Age;
            // ToUpdate.IsHigh = Form.IsHigh;
            // ToUpdate.CatchPhrase = Form.CatchPhrase;
            // ToUpdate.UpdatedAt = DateTime.Now;

            // _context.SaveChanges();

            // Alternative, prettier way to update without having to manually
            // call out 982374897289347 fields
            Form.IntruderId = id;
            _context.Update(Form);
            _context.Entry(Form).Property("CreatedAt").IsModified = false;
            _context.SaveChanges();

            return RedirectToAction("Index");
        }

        [HttpPost("/intruder/create")]
        public IActionResult CreateIntruder(IndexWrapper Form)
        {
            if(ModelState.IsValid)
            {
                _context.Add(Form.FormModel);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            else
            {
                return Index();
            }
        }

        [HttpGet("/intruder/delete/{id}")]
        public IActionResult DeleteIntruder(int id)
        {
            Intruder ToDelete = _context.Intruders
                .FirstOrDefault(i => i.IntruderId == id);

            _context.Remove(ToDelete);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}