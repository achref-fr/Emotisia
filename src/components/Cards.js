import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    
    <div className='cards'>
     <h1 className='aboutx'>Who Are We?</h1>
         <p className='aboutr'> An interactive app designed to help children, parents, and professionals </p>
          <p className='aboutr'> detect and prevent bullying and mental health issues </p>    
         
          <p className='aboutr'>through educational games and emotional analysis.</p>
          <div className='cards__container'>
        <h1> The Team  </h1>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-22.jpg'
              text='"At Emotisia, our mission is to create a safe environment where children can thrive emotionally and mentally .We leverage advanced technology to detect early signs of psychological distress and bullying, empowering parents and educators to take timely action."'
              label='Co-Founder'
              path='/'
            />
           
            <CardItem
              src='images/img-44.jpg'
              text=' "Our vision with Emotisia is to build a supportive community that protects children s well-being. By providing actionable insights and fostering emotional intelligence, we aim to prevent harmful experiences and nurture future generations."'
              label='Co-Founder'
              path='/'
            />
          </ul>
          
         
        </div>
      </div>
      <div style={{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f9f9f9',
  padding: '40px',
  borderRadius: '15px',
  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
  width: '80%',
  margin: 'auto',
  fontFamily: 'Arial, sans-serif'
}}>
  <h1 style={{ color: '#black', fontSize: '48px', marginBottom: '20px' }}>The Reality of Bullying</h1>
  <p style={{ color: '#555', fontSize: '28px', marginBottom: '10px', textAlign: 'center' }}>1 in 5 children experience bullying.</p>
  <p style={{ color: '#555', fontSize: '28px', marginBottom: '10px', textAlign: 'center' }}>63% of victims never report it.</p>
  <p style={{ color: '#555', fontSize: '28px', textAlign: 'center' }}>Bullying can cause anxiety, depression, and low self-esteem.</p>
</div>

      <div className='cards'>
      <h1 className='aboutx'>How Emotisia Helps</h1>
      <p className='aboutr'>Interactive educational games – Teach kids empathy & emotional intelligence. </p>
      <p className='aboutr'> Emotional tracking – Identify signs of distress early.</p>    
      <p className='aboutr'>  Professional support – Connect with experts when needed. </p>
      </div>
      <div style={{
display: 'flex',
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#f9f9f9',
padding: '40px',
borderRadius: '15px',
boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
width: '80%',
margin: 'auto',
fontFamily: 'Arial, sans-serif'
}}>
  <h1 style={{ color: '#black', fontSize: '48px', marginBottom: '20px' }}>How It Works</h1>
  <p style={{ color: '#555', fontSize: '28px', marginBottom: '10px', textAlign: 'center' }}>Download the app (iOS & Android).</p>
  <p style={{ color: '#555', fontSize: '28px', marginBottom: '10px', textAlign: 'center' }}>Play and learn – Interactive scenarios guide children.</p>
  <p style={{ color: '#555', fontSize: '28px', marginBottom: '10px', textAlign: 'center' }}>Track emotional changes – Receive real-time insights.</p>
  <p style={{ color: '#555', fontSize: '28px', textAlign: 'center' }}>Get expert help – Connect with child psychologists when needed.</p>
</div>

      <div className='cards__container'>
        <h1>Our Features !</h1>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/jeuxx.jpg'
              text='Interactive scenarios that help children understand social situations.'
              label='Fun & Educational Games'
              path='/'
            />
            <CardItem
              src='images/emotionT.jpg'
              text='  AI-powered reports on behavioral changes.'
              label='Emotion Tracking '
              path='/'
            />  
            <CardItem
              src='images/dashboard.jpg'
              text='Insights and advice tailored for families. 

              '
              label=' Parent Dashboard '
              path='/'
            />
          </ul>
          
         
        </div>
      </div>
     
       
      <div className='cards__container'>
        <h1>Pricing Plan</h1>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/free.jpg'
              text=' 
Access to limited scenarios -
Basic emotion tracking'
              label='Basic Plan (Free)'
              path='/'
            />
            <CardItem
              src='images/4.999.jpg'
              text=' Full access to all games -
              Detailed emotional reports
              - Expert consultation options'
              label='Premium Plan (€4.99/month)'
              path='/'
            />  
           
          </ul>
          
         
        </div>
      </div>
    </div>
    
    
  );
}

export default Cards;