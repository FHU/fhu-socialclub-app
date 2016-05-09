using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace fhu_socialclub_app.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Role { get; set; }
        public string Classification { get; set; }
        public string ProfilePictureURL { get; set; }
        public string Email { get; set; }
        public int? ClubId { get; set; }
        public int? TeamId { get; set; }
    }
}