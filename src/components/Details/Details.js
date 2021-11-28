const Details = () => {
    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: Milo</h3>
                <p className="type">Type: dog</p>
                <p className="img"><img src="/images/dog.png" alt="img" /></p>
                <div className="actions">
                    <a className="button" href="a">Edit</a>
                    <a className="button" href="a">Delete</a>
                    
                    <a className="button" href="a">Like</a>
                    
                    <div className="likes">
						<img className="hearts" src="/images/heart.png" alt="img" />
						<span id="total-likes">Likes: 0</span>
					</div>
                </div>
            </div>
            <div className="pet-description">
                <h3>Description:</h3>
                <p>Today, some dogs are used as pets, others are used to help humans do their work. They are a popular
                    pet because they are usually playful, friendly, loyal and listen to humans. Thirty million dogs in
                    the United States are registered as pets.[5] Dogs eat both meat and vegetables, often mixed together
                    and sold in stores as dog food. Dogs often have jobs, including as police dogs, army dogs,
                    assistance dogs, fire dogs, messenger dogs, hunting dogs, herding dogs, or rescue dogs.</p>
            </div>
        </section>
    );
};

export default Details;