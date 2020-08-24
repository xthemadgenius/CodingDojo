using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UserDashboard.Models{
    public class NotificationWrapper { 

        public int UserId {get; set;}
        public User Users { get; set; }
        public List<Message> AllMessages{get; set;}

        public List<Comment> AllComments{get; set;}

        public List<User> AllUsers{get; set;}

        public User UserForm{get; set;}

        public Message MessageForm{get; set;}

        public Comment CommentForm{get; set;}
    }
}