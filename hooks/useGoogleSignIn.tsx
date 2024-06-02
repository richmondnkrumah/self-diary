import { useState } from 'react';
import {
    GoogleSignin,
    statusCodes,
    User
} from '@react-native-google-signin/google-signin';
import { supabase } from '@/utils/supabase';

interface SupabaseSignInResponse {
    data: any; // Adjust according to the actual response type from Supabase
    error: any; // Adjust according to the actual error type from Supabase
}

interface UseGoogleSignIn {
    data: any | null; // Adjust the type based on what `data` you expect
    loading: boolean;
    error: Error | null;
    signInWithGoogle: () => Promise<void>;
}

const useGoogleSignIn = (): UseGoogleSignIn => {
    const [data, setData] = useState<any | null>(null); // Adjust the type based on what `data` you expect
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const signInWithGoogle = async (): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            await GoogleSignin.hasPlayServices();
            const userInfo: User = await GoogleSignin.signIn();
            console.log(JSON.stringify(userInfo, null, 2));

            if (userInfo.idToken) {
                const { data: supabaseData, error: supabaseError }: SupabaseSignInResponse = await supabase.auth.signInWithIdToken({
                    provider: 'google',
                    token: userInfo.idToken
                });

                if (supabaseError) {
                    console.log(supabaseError)
                    setError(supabaseError)
                }

                setData(supabaseData);
            } else {
                throw new Error("No Id Token Present");
            }
        } catch (error: any) {  
            setError(error);
          
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, signInWithGoogle };
};

export default useGoogleSignIn;
