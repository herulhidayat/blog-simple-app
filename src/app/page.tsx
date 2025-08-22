import DataList from "@/components/Features/DataList";
import Hero from "@/components/Header/Hero";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <section>
        <Hero
          title="Blog List"
          description="Showing the list of blog posts. You can filter by title or category."
        />
      </section>
      <section className="mt-8">
        <Container>
          <DataList />
        </Container>
      </section>
    </>
  );
}
