import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { Grid, Transition } from "semantic-ui-react";

import { AuthContext } from "../context/auth";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { FETCH_POSTS_QUERY } from "../util/graphql";

function Home() {
  const { user } = useContext(AuthContext);
  //   const { loading, error, data } = useQuery(FETCH_POSTS_QUERY);

  //   if (error) {
  //     console.log(`Error! ${error.message}`);
  //   }
  //   console.log("posts data", data);
  //   const posts = data.getPosts;
  console.log("user info", user);

  const display = user ? (
    <div>You have been logged in!</div>
  ) : (
    <div>Landing Page Goes Here</div>
  );

  return (
    // <Grid columns={3}>
    //   <Grid.Row className="page-title">
    //     <h1>Recent Posts</h1>
    //   </Grid.Row>
    //   <Grid.Row>
    //     {user && (
    //       <Grid.Column>
    //         <PostForm />
    //       </Grid.Column>
    //     )}
    //     {loading ? (
    //       <h1>Loading posts..</h1>
    //     ) : (
    //       <Transition.Group>
    //         {posts &&
    //           posts.map((post) => (
    //             <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
    //               <PostCard post={post} />
    //             </Grid.Column>
    //           ))}
    //       </Transition.Group>
    //     )}
    //   </Grid.Row>
    // </Grid>
    display
  );
}

export default Home;