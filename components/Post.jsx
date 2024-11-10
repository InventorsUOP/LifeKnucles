
import React from "react";
import ImageCard from "@/components/ImageCard";
import CommentList from "@/components/CommentList";

export default function Post() {
    return (
        <>

            <ImageCard
                title="Wildfire in the Hills"
                description="The aftermath of a raging wildfire spreading through a forest in the hills."
            />
            <CommentList />
        </>
    );
}