import { PostBusiness } from "../business/PostBusiness";

export default async function createPost(post, res) {
    try{

        const input = post;

        const postBusiness = new PostBusiness();
        await postBusiness.createPost(input);

        res.send(200);
    }catch(error){
        console.log(error)
    }

}