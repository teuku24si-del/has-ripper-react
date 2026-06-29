// src/components/LandingPage/ValueProposition.jsx
import React from 'react';
import { BiSupport, BiPurchaseTagAlt, BiCheckShield } from 'react-icons/bi';
import { Container } from '../antigravity/Container';
import { Grid } from '../antigravity/Grid';
import { Card } from '../antigravity/Card';
import { Typography } from '../antigravity/Typography';

const ValueProposition = () => {
  return (
    <Container className="py-24">
      <Grid className="grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <Card className="p-6 border-none shadow-none bg-transparent items-center">
          <div className="w-14 h-14 bg-blue-50 text-[#7F7CFF] rounded-full flex items-center justify-center mb-4">
            <BiSupport size={26} />
          </div>
          <Typography variant="h4">Global Support</Typography>
          <Typography variant="p" className="text-xs text-gray-400 mt-2 leading-relaxed max-w-xs">
            24/7 assistance wherever your travels take you, across all continents.
          </Typography>
        </Card>
        
        <Card className="p-6 border-none shadow-none bg-transparent items-center">
          <div className="w-14 h-14 bg-blue-50 text-[#7F7CFF] rounded-full flex items-center justify-center mb-4">
            <BiPurchaseTagAlt size={26} />
          </div>
          <Typography variant="h4">Best Prices</Typography>
          <Typography variant="p" className="text-xs text-gray-400 mt-2 leading-relaxed max-w-xs">
            We negotiate directly with local vendors to ensure you get the most value for your budget.
          </Typography>
        </Card>
        
        <Card className="p-6 border-none shadow-none bg-transparent items-center">
          <div className="w-14 h-14 bg-blue-50 text-[#7F7CFF] rounded-full flex items-center justify-center mb-4">
            <BiCheckShield size={26} />
          </div>
          <Typography variant="h4">Secure Booking</Typography>
          <Typography variant="p" className="text-xs text-gray-400 mt-2 leading-relaxed max-w-xs">
            Your data and transactions are protected with military-grade encryption and fraud prevention.
          </Typography>
        </Card>
      </Grid>
    </Container>
  );
};

export default ValueProposition;