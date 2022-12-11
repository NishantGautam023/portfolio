import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Nishant</GradientText> ⚛👋
        </>
      }
    description={
        <>
          Web Developer Based in Waterloo, Canada. Nishant brings your idea to
          life with modern technology.{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Developer | Tech Enthusiast | Learner
          </a>{' '}
          Looking for your next Project, Lets Discuss{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Lets Build Something Amazing Together
          </a>{' '}
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/GuTuu023" target="_blank">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/niishantgautam/" target="_blank">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
