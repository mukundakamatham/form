import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export const Home=({ nextStep,})=>{
    return <>
    
   
    <Card className="text-center" style={{ marginTop: 100 }}>
  <Card.Body>
    <Card.Title>Being Fit studio welcomes you
</Card.Title>
    <Card.Text>
    Would you like to explore the powerfulness of Yoga with us?

    </Card.Text>
    <Button onClick={()=>nextStep(1)} variant="primary">Absolutely
</Button>
  </Card.Body>
</Card>
    </>
    }