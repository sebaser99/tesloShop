import Head from "next/head";
import { FC } from "react";
import {Box} from '@mui/material'

interface Props {
    children: JSX.Element;
    title: string;

}

export const AuthLayout: FC<Props> = ({title, children}) => {
  return (
    <>
        <Head>
            <title>{title}</title>

        </Head>
        <main>
            <Box display='flex' justifyContent= 'center' alignItems= 'center' height={'calc(100vh )'}>
                {children}
            </Box>
        </main>
    </>
   
  )
}
