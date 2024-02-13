import React from 'react';
import Card from '../components/Card';
const App = () => {
  const Data = [
  {title:'FREE',
  price:'$0/month',
  user:'Single User',
  Storage:'5GB Storage',
  project:'Ultimated Public Projects',
  access:'Community Access',
  private:'Ultimated Private Projects',
  phone:'Dedicated Phone Support',
  subdomain:'Free Subdomain',
  report:'Monthly Status Reports'
  },
  {title:'PLUS',
  price:'$9/month',
  user:'5 Users',
  Storage:'50GB Storage',
  project:'Ultimated Public Projects',
  access:'Community Access',
  private:'Ultimated Private Projects',
  phone:'Dedicated Phone Support',
  subdomain:'Free Subdomain',
  report:'Monthly Status Reports'
  },
  {title:'PRO',
  price:'$49/month',
  user:'Unlimited Users',
  Storage:'50GB Storage',
  project:'Ultimated Public Projects',
  access:'Community Access',
  private:'Ultimated Private Projects',
  phone:'Dedicated Phone Support',
  subdomain:'Free Subdomain',
  report:'Monthly Status Reports'
  }
]
  return (
    <div>
    
      <Card Data ={Data} />
    </div>
  );
};

export default App;