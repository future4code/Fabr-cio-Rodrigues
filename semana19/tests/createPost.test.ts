import getPostById from '../src/Services/getUserById';
import createPost from '../src/Services/CreatePost';
import deletePostById from '../src/Services/deletePostById';


test("Create Post test", async () => {
    const post = {
      id: "id do post",
      title: "Título",
      content: "Conteúdo",
    };

    await createPost(post, 200);
    const postFromDb = await getPostById(post.id, "Labook_Users");

    afterAll(async () => {
      await deletePostById("id do post", "Labook_users");
      // await destroyConnection();

    expect(postFromDb).not.toBe(undefined);
    expect(postFromDb).toEqual({
      id: "id do post",
      title: "Título",
      content: "Conteúdo",
    });

  });
});

test("Create Post (proposital errors)", async () => {
  try {
    const post = {
      id: "id do post",
      title: "Título",
      content: "Conteúdo",
    };

    await createPost(post, 200);
    await createPost(post, 200);
  } catch (err) {
    expect(err).not.toBe(undefined)
  }
});



