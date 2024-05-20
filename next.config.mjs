/** @type {import('next').NextConfig} */
const nextConfig = {

    images:{  //necesito configurar las imagenes remotas (URL) para que next las pueda renderizar. estos son los atributos mínimos para cada dominio donde se alojen las imagenes
        remotePatterns:[{
            protocol:'https',
            hostname:'th.bing.com',
            port:'',
            pathname:'/**'
        }]
    }

};

export default nextConfig;
