
// import { BsFillBookmarkFill } from 'react-icons/fa';

const Blog = ({blog}) => {
    const {title,cover,author,posted_date,hashtags} = blog;
    const author_img=blog['author-img']
    const reading_time=blog['reading-time']
    return (

      <div className="mb-14">

<div>
            <img className="w-full" src={cover} alt="" />
            
        </div>
        <div className="flex justify-between mt-4">
        <div className="flex gap-5">
            <img className="w-9 h-9" src={author_img} alt="" />
            <div>
                <h2>{author}</h2>
                <p>{posted_date}</p>
            </div>
        </div>

        <div>  <span className="mx-4">{reading_time} min read</span> 
        <button><i class="fa-regular fa-bookmark"></i></button>

        </div>
      </div>

      <h2 className="text-1xl">{title}</h2>
      <p>
        {
            hashtags.map((has,idx)=> <span key={idx}><a href="">#{has}</a></span>)
        }
      </p>

        
      </div>
    );
};


// Blog.prototype={
//     blog: Prototype.object.isRequired
// }

export default Blog;

