import Container from "../modules/container";
import TitleComponent from "../modules/title";
import {commissions} from '../../data/commission'

function HomeCommission() {
    return ( 
        <Container>
            <TitleComponent title={commissions.title}/>
            <p>{commissions.desc}</p> 
            <div class="grid grid-cols-3 gap-3 md:grid-cols-3 sm:grid-cols-12">
              {
                commissions.data.map((commission, index) => {
                  return (
                    console.log(commission) //toc change :)
                  )
                })
              }
            </div>
        </Container>
     );
}

export default HomeCommission;