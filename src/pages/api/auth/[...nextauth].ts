import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import firebase from '../../../services/firebaseConnection'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'read:user'
    }),
    // ...add more providers here
  ],
  callbacks: {
    async session(session, profile){
      try{

        const lastDonate = await firebase.firestore().collection('users')
        .doc(String(profile.sub))
        .get()
        .then( (snapshot) => {
          if(!snapshot.exists){
            return null
          }else{
            return snapshot.data().lastDonate.toDate()         
          }
        })

        return {
          ...session,
          id: profile.sub,
          vip: lastDonate ? true : false,
          lastDonate: lastDonate
        }
      }
      catch(err){
        return {
          ...session,
          id: null,
          vip: false,
          lastDonate: null,
        }
      }
    },
    async signIn(user, account, profile){
      const { email } = user;
      try{
        return true;
      }
      catch(err){
        console.log('erro:', err)
        return false;
      }
    } 
  } 
})