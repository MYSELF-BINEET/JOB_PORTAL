import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';

const category = [
    "Software Engineer",
    "Front-end Developer",
    "Back-end Developer",
    "Full-stack Developer",
    "Data Scientist",
    "Machine Learning Engineer",
    "DevOps Engineer",
    "Software Architect",
    "QA Engineer",
    "Systems Analyst",
    "Product Manager",
    "UX/UI Designer",
    "Security Engineer",
    "Database Administrator",
    "Technical Support Specialist",
    "Cloud Engineer"
]

const CategoryCarousel = () => {
  return (
    <div>
            <Carousel className="w-full max-w-xl mx-auto my-20">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem className="md:basis-1/2 lg-basis-1/3">
                                <Button onClick={()=>searchJobHandler(cat)} variant="outline" className="rounded-full">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>

  )
}

export default CategoryCarousel