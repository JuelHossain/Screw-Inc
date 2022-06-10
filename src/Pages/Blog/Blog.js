import { Comment, QuestionAnswer } from "@mui/icons-material";
import { Box, Container, Divider, List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";

const BusinessCard = ({ icon,title, text,children }) => {
  return (
    <Box sx={{ height: 350, p: 3, flex: 1 }}>
      <Stack sx={{ alignItems: "start" }} spacing={2}>
        <QuestionAnswer sx={{ fontSize: 50 }} color="primary" />
        <Typography variant="h4" textAlign={'left'}>{title}</Typography>

        <Typography variant="h6">
          {icon}
          {text}
        </Typography>
        {children}
      </Stack>
    </Box>
  );
};
const Blog = () => {
  return (
    <Container maxWidth={"lg"} sx={{ my: 10, textAlign: "center" }}>
      <Typography variant="h4">Questions And Answers?</Typography>
      <Divider sx={{ mx: 30, my: 2 }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          aligntItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <BusinessCard
          title={"How will you improve the performance of a React Application?"}
        >
          <List
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              bgcolor: "background.paper",
            }}
          >
            <ListItem
              sx={{ fontSize: "22px" }}
              disableGutters
              secondaryAction={<Comment color="secondary" />}
            >
              We Should use immutable data structures.
            </ListItem>
            <ListItem
              sx={{ fontSize: "22px" }}
              disableGutters
              secondaryAction={<Comment color="secondary" />}
            >
              We Should Use StateLess Components and React Pure components
            </ListItem>
            <ListItem
              sx={{ fontSize: "22px" }}
              disableGutters
              secondaryAction={<Comment color="secondary" />}
            >
              We Should Use React Fragments to avoid additional html element
              wrappers
            </ListItem>
            <ListItem
              sx={{ fontSize: "22px" }}
              disableGutters
              secondaryAction={<Comment color="secondary" />}
            >
              Avoid Inline Function Definition in the Render Function.
            </ListItem>
            <ListItem
              sx={{ fontSize: "22px" }}
              disableGutters
              secondaryAction={<Comment color="secondary" />}
            >
              By Avoiding using Index as Key for map
            </ListItem>
          </List>
        </BusinessCard>
        <BusinessCard
          title={
            "What are the different ways to manage a state in a React application?"
          }
        >
          <List
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              bgcolor: "background.paper",
            }}
          >
            <ListItem
              sx={{ fontSize: "22px" }}
              disableGutters
              secondaryAction={<Comment color="secondary" />}
            >
              Local (UI) state – Local state is data we manage in one or another
              component.
            </ListItem>
            <ListItem
              sx={{ fontSize: "22px" }}
              disableGutters
              secondaryAction={<Comment color="secondary" />}
            >
              Global (UI) state – Global state is data we manage across multiple
              components.
            </ListItem>
            <ListItem
              sx={{ fontSize: "22px" }}
              disableGutters
              secondaryAction={<Comment color="secondary" />}
            >
              Server state – Data that comes from an external server that must
              be integrated with our UI state.
            </ListItem>
            <ListItem
              sx={{ fontSize: "22px" }}
              disableGutters
              secondaryAction={<Comment color="secondary" />}
            >
              URL state – Data that exists on our URLs, including the pathname
              and query parameters.
            </ListItem>
            <ListItem
              sx={{ fontSize: "22px" }}
              disableGutters
              secondaryAction={<Comment color="secondary" />}
            >
              By Avoiding using Index as Key for map
            </ListItem>
          </List>
        </BusinessCard>
        <BusinessCard
          title={"How does prototypical inheritance work?"}
          text={
            " Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__"
          }
          icon={<Comment color="secondary" />}
        />
        <BusinessCard
          title={
            "Why you do not set the state directly in React. For example, if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts`"
          }
        >
          <List
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              bgcolor: "background.paper",
            }}
          >
            <ListItem
              sx={{ fontSize: "22px" }}
              disableGutters
              secondaryAction={<Comment color="secondary" />}
            >
              If we update it directly, calling the products afterward may just
              replace the update you made.
            </ListItem>
            <ListItem
              sx={{ fontSize: "22px" }}
              disableGutters
              secondaryAction={<Comment color="secondary" />}
            >
              When we directly update the state, it does not change this.state
              immediately. Instead, it creates a pending state transition, and
              accessing it after calling this method will only return the
              present value.
            </ListItem>
            <ListItem
              sx={{ fontSize: "22px" }}
              disableGutters
              secondaryAction={<Comment color="secondary" />}
            >
              In that way we will lose control of the state across all
              components .
            </ListItem>
          </List>
        </BusinessCard>
        <BusinessCard
          title={
            "You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?  "
          }
><List
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              bgcolor: "background.paper",
            }}
          >
            <ListItem
              sx={{ fontSize: "22px" }}
              disableGutters
              secondaryAction={<Comment color="secondary" />}
            >
            { `var products = [
    {"id": 1, "name": "product 1"},
    {"id": 2, "name": "product 2"},
    {"id": 3, "name": "product 3"},
    {"id": 3, "name": "product 1"},
    {"id": 3, "name": "product 2"},
    {"id": 3, "name": "product 3"},
]
`}
                      </ListItem>
            <ListItem
              sx={{ fontSize: "22px" }}
              disableGutters
              secondaryAction={<Comment color="secondary" />}
            >
            { `in this case i will do 
`}
                      </ListItem>
            <ListItem
              sx={{ fontSize: "22px" }}
              disableGutters
              secondaryAction={<Comment color="secondary" />}
            >
            { `const product 3  = products.filter(product=>product.name==='product 3')
`}
                      </ListItem>
            <ListItem
              sx={{ fontSize: "22px" }}
              disableGutters
              secondaryAction={<Comment color="secondary" />}
            >
            { `it will return all product 3  in a new array of objects. as simple as that.
`}
                      </ListItem>
                  </List>
              </BusinessCard>
      </Box>
    </Container>
  );
};

export default Blog;
