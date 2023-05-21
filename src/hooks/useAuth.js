import { CognitoIdentityServiceProvider, config } from 'aws-sdk';

config.update({
    region: 'us-east-1',
  });

const cognitoClient = new CognitoIdentityServiceProvider( config );

export const useAuth = () => {

    const onSignUp = async() => {
        const params = {
            ClientId: '13n02ltf8fhn33hanjig4kgk43',
            Username: 'asgarper11@gmail.com',
            Password: '1711Ces2000.',
            UserAttributes: [
                {
                    Name: 'name',
                    Value: `Cesar Perez`,
                },
                {
                    Name: 'email',
                    Value: 'asgarper11@gmail.com',
                }
            ]
        };
        try {
            const resp = await cognitoClient.signUp( params ).promise();
            console.log(resp);
        } catch (error) {
            alert(error.message)
        }
    }

  return {
    onSignUp
  }
}
