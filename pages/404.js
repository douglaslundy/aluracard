import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';
import {useState} from 'react';
import { useRouter } from 'next/router';

function Titulo(props) {
    const Tag = props.tag || 'h1';
    return (
      <>
        <Tag>{props.children}</Tag>
        <style jsx>{`
              ${Tag} {
                  color: ${appConfig.theme.colors.neutrals['000']};
                  font-size: 24px;
                  font-weight: 600;
              }
              `}</style>
      </>
    );
  }


export default function Pagina404() {
    return (
        <>
           <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        
             <Image
              styleSheet={{
                borderRadius: '60%',
                marginBottom: '1px',
              }}
              src={`https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif`}
            />
        
      </Box>
        </>
    )
}