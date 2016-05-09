using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace fhu_socialclub_app.Models
{
    public class EventInvite
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public bool? RSVP { get; set; }
    }
}