import { Container, Grid } from "@chakra-ui/react";
import FeedSkeleton from "./feed-skeleton";

const PageLoading = () => {
  return (
    <Container>
      <Grid templateColumns="repeat(3, 1fr)" gap="6">
        <FeedSkeleton />
        <FeedSkeleton />
        <FeedSkeleton />
        <FeedSkeleton />
        <FeedSkeleton />
        <FeedSkeleton />
        <FeedSkeleton />
        <FeedSkeleton />
        <FeedSkeleton />
      </Grid>
    </Container>
  );
};

export default PageLoading;
