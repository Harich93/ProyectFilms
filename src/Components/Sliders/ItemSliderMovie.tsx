interface ItemSlider {
    poster? : string
}

export const ItemSliderMovie = ( { poster }:ItemSlider) => {
    return (
        <div className='slider-item' style={{ backgroundImage: `url(${poster})` }}>
            
        </div>
    )
}
