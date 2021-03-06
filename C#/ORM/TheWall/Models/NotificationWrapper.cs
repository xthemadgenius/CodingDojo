using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheWall.Models{
    public class NotificationWrapper { 
        public List<Message> AllMessages{get; set;}

        public List<Comment> AllComments{get; set;}

        public List<User> AllUsers{get; set;}

        public User UserForm{get; set;}

        public Message MessageForm{get; set;}

        public Comment CommentForm{get; set;}
    }
}