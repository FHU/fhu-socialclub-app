using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace cds_api.Models
{
    public class FHUSocialDBContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx

        public FHUSocialDBContext() : base("name=FHUSocialDBContext")
        {

        }

        public System.Data.Entity.DbSet<fhu_socialclub_app.Models.Club> Clubs { get; set; }

        public System.Data.Entity.DbSet<fhu_socialclub_app.Models.Application> Applications { get; set; }

        public System.Data.Entity.DbSet<fhu_socialclub_app.Models.Team> Teams { get; set; }

        public System.Data.Entity.DbSet<fhu_socialclub_app.Models.Question> Questions { get; set; }

        public System.Data.Entity.DbSet<fhu_socialclub_app.Models.Answer> Answers { get; set; }

        public System.Data.Entity.DbSet<fhu_socialclub_app.Models.AnswerResponse> AnswerResponses { get; set; }

        public System.Data.Entity.DbSet<fhu_socialclub_app.Models.User> Users { get; set; }

        public System.Data.Entity.DbSet<fhu_socialclub_app.Models.Event> Events { get; set; }

        public System.Data.Entity.DbSet<fhu_socialclub_app.Models.EventInvite> EventInvites { get; set; }

        public System.Data.Entity.DbSet<fhu_socialclub_app.Models.Message> Messages { get; set; }
    }
}
