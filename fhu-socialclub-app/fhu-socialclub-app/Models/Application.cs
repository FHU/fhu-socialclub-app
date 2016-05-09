using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace fhu_socialclub_app.Models
{
    public class Application
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int AuthorId { get; set; }
        public string Description { get; set; }
        public bool IsApproved { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}