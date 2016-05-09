using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace fhu_socialclub_app.Models
{
    public class Question
    {
        [Key]
        public int Id { get; set; }
        public int ApplicationId { get; set; }
        public string Text { get; set; }
        public bool AllowMultipleAnswers { get; set; }
    }
}