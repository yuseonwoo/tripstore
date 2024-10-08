import React,{Component} from "react";
import process from '../../datas/index/process.json'
import '../../styles/index/process.scss'
class Process extends Component{

  componentDidMount (){
    console.log('컴텐츠3 이 마운트 되었습니다.');
  }
  render(){
    return (
      <div className="content Process">
        <header>
          <div className="texts">
            <hr />
            <h2>Tripstore process</h2>
            <p>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. </p>
          </div>
        </header> 
        {/* <Header h2="Tripstore Process" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "/> */}
        <section>
          {process.map((data, i)=>{
            return(
              <article className={data.class}>
                <div className={`image i${i + 1}`}></div>
                <div className="texts">
                <h2>{i+1}Step</h2>
                <h4>{data.title}</h4>
                <ul>{data.content.map((content, index)=>{
                  return(
                    <li key={index}>{content}</li>
                  );
                })}
                </ul>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    );
  }
}

export default Process;