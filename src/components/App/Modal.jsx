
const emptyIMG = (<svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="41%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>);

function checkImg(img) {
    return /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/.test(img);
    /* return false; */
}

export function Modal({ children, href="#", img, alt="..."}) {
    let pr;

    if (img) {
        if (checkImg(img)) {
            pr = (<img src={img} class="card-img-top" alt={alt}/>);
        } else {
            pr = emptyIMG;
        }
        
    }

    return (
        <div className="card" >
        {pr}
        {children}
        <a href= {href} className="btn btn-primary">Подробнее</a>
        </div>
        
    )
    
}