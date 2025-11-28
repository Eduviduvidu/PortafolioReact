import "@css/components/Card.css";
export default function Card({children}){
    return (
        <div className="ev-card">
            {children}
        </div>
    );
}