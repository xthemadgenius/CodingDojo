using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheWall.Models{
    public class Message{
        [Key]
        public int MessageId { get; set; }  
        public string MsgContent { get; set; }
        public int UserId { get; set; }
        public User Creator { get; set; }
        public List<Comment> Comments { get; set; }

        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
    }
}