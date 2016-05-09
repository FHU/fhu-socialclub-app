using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace fhu_socialclub_app.Models
{
    public class AnswerResponse
    {
        [Key]
        public int Id { get; set; }
        public int QuestionId { get; set; }
        public int UserId { get; set; }
        public string OpenResponse { get; set; }
    }
}