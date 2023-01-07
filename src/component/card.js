

function Card({title, source, text}) {
    return(
        
        <div className="col-4">
        <div className="card" style={{width: 18 + 'rem'}}>
          <img
            src={source}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 ClassName="card-text">{text}</h6>
            <a href="#" className="btn btn-success">Buy Now</a>
            <a href="#" className="btn btn-warning" >Add to Cart</a>
            <footer className="content">
          
          <button className="qt-minus bg-light text-black"> - </button>
          <button className="qt bg-light text-black"> 1 </button>
          <button className="qt-plus bg-light text-black"> + </button>
        </footer>
      

          </div>
        </div>
      </div>
      
    )
}

export default Card;