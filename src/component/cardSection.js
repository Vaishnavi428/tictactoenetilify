

import Card from "./card";


function CardSection(){
    return(
        <section className="contact bg-warning ">
      <div className="container ">
        <h2 className="text-white">
          We love Shopping!
        </h2>
        <div className="row">
            <Card title="Sneakers For Men  (White)" source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThx96U3QM0cbL5FEmb18Ad-kCmiRP_71TfAA&usqp=CAU" text="$320"/>
            <Card title="Sneakers For Men (red)" source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZ7A8VSgmwukiXaQphVsGk1EiVd3xBCy-UQtVZfe_xyiujG8s4gCQS2-JE7VbZN1fFFo&usqp=CAU" text="$420"/>
            <Card title="Sneakers For Men (grey)" source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXeNTCEdtm0E1jsQKmrm2PsVpG8vgadupIg&usqp=CAU" text="$520"/>
        </div>
        </div>
        </section>
    )
}
<Card/>
export default CardSection;