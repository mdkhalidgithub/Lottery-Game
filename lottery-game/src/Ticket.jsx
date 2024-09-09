import TicketNmr from "./TicketNum";
import "./Ticket.css"

export default function Ticket({ticket}){
    return (
        <div className="Ticket">
            <p>Ticket</p>
            {ticket.map((num,idx)=>(
                <TicketNmr num={num} key={idx}/>
            ))}
        </div>
    )
}