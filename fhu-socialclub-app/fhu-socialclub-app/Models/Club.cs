using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace fhu_socialclub_app.Models
{
    public class Club
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int MinSize { get; set; }
        public int MaxSize { get; set; }
    }
}