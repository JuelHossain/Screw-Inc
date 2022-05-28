
import { Button, Container } from '@mui/material';
import React from 'react';
import { toast } from 'react-toastify';

const Feedback = () => {
    return (
      <Container maxWidth={"lg"} sx={{ mb: 8 }}>
        <div class="hero bg-base-200">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
              <h1 class="text-5xl font-bold">Give Us A FeedBack</h1>
              <p class="py-6">
                You Don't Need to Login to give us a feed back just type in here
                and submit we will get your feedback and will improve our
                business model. thank you.
              </p>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div class="card-body">
                <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    toast.success("Thank You , We Have Got Your Feedback. ");
                                    e.target.reset();
                  }}
                >
                  <div class="form-control">
                    <input
                      required
                      type="text"
                      placeholder="Feedback Title"
                      class="input input-bordered"
                    />
                  </div>
                  <div class="form-control">
                    <textarea
                      required
                      class="textarea textarea-bordered"
                      placeholder="Write here What You Have to say"
                    ></textarea>
                  </div>
                  <div class="form-control mt-6">
                    <Button type="submit" variant="contained">
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default Feedback;