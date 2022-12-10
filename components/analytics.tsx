import Script from 'next/script';

function GoogleAnalytics() {
	return (
		<div className="container">
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=G-6DQQTR4FKV`}
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-6DQQTR4FKV');
                `}
			</Script>
		</div>
	);
}

export default GoogleAnalytics;
