namespace fhu_socialclub_app.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialModelCreation1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Clubs",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        MinSize = c.Int(nullable: false),
                        MaxSize = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Clubs");
        }
    }
}
