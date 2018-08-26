export class BlogSummary {
    public title?: string;
   public subtitle?: string;
    public summaryText?: string;
    public imageSrc?: string;
    public actionRoute?: string;
    public date?: string;
    public tags?: string;

    constructor (blogSummary : {
                     title?: string, subtitle?: string, summaryText?: string, imageSrc?: string,
                     actionRoute?: string, date?: string, tags?: string
                 }) {
        this.title = blogSummary.title;
        this.subtitle = blogSummary.subtitle;
        this.summaryText = blogSummary.summaryText;
        this.imageSrc = blogSummary.imageSrc;
        this.actionRoute = blogSummary.actionRoute;
        this.date = blogSummary.date;
        this.tags = blogSummary.tags;
    }
}





