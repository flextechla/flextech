import type { BlogPost } from "@/lib/posts";

const post: BlogPost = {
  slug: "protect-yourself-from-phishing",
  title: "How to Protect Yourself from Phishing Attacks",
  excerpt:
    "Phishing attacks are one of the most common cyber threats today. Learn how to recognize and avoid them with these practical tips.",
  date: "2025-01-15",
  Body: () => (
    <>
      <p>
        You get an email that looks like it&apos;s from your bank. The logo is
        right, the language sounds official, and it says there&apos;s a problem
        with your account that needs immediate attention. There&apos;s a handy
        link to fix it. You click, enter your login info, and just like that —
        someone else has your credentials.
      </p>

      <p>
        That&apos;s phishing, and it&apos;s the most common way people get
        hacked in 2025. Not through some sophisticated zero-day exploit — just
        a well-crafted fake message that tricks you into giving up your
        information. Here&apos;s how to spot it and protect yourself.
      </p>

      <h2>What Phishing Actually Looks Like</h2>

      <p>
        Phishing used to be easy to spot — broken English, obvious fake
        addresses, absurd claims about Nigerian princes. Those still exist, but
        modern phishing is much more convincing. Attackers now send emails that
        closely mimic real companies like Amazon, Microsoft, your bank, or even
        your own employer.
      </p>

      <p>
        Common phishing scenarios include emails claiming your account has been
        locked or compromised, fake shipping notifications from UPS or FedEx,
        invoices for things you didn&apos;t buy, password reset requests you
        didn&apos;t initiate, and messages from &quot;IT&quot; asking you to
        verify your credentials. The goal is always the same: get you to click
        a link and enter sensitive information on a fake website, or download
        an attachment that installs malware.
      </p>

      <h2>How to Spot a Phishing Email</h2>

      <h3>Check the Sender&apos;s Actual Email Address</h3>

      <p>
        The display name might say &quot;Bank of America&quot; but the actual
        email address could be something like support@bankofamerica-secure-login.com.
        Always look at the full email address, not just the name. Legitimate
        companies send from their actual domain — not a lookalike.
      </p>

      <h3>Hover Over Links Before Clicking</h3>

      <p>
        Before you click any link in an email, hover your mouse over it. A
        small preview should show you where the link actually goes. If the
        email claims to be from PayPal but the link points to
        paypal-secure.sketchy-domain.com, that&apos;s a phishing link. When in
        doubt, don&apos;t click the link at all — go directly to the
        company&apos;s website by typing the address into your browser yourself.
      </p>

      <h3>Watch for Urgency and Threats</h3>

      <p>
        Phishing emails almost always try to create a sense of panic.
        &quot;Your account will be closed in 24 hours,&quot; &quot;Unauthorized
        login detected,&quot; &quot;Immediate action required.&quot; Real
        companies don&apos;t usually threaten you via email with tight
        deadlines. If a message is trying to rush you into clicking something,
        slow down and verify it through other channels.
      </p>

      <h3>Look for Generic Greetings</h3>

      <p>
        Your bank knows your name. If an email starts with &quot;Dear
        Customer&quot; or &quot;Dear User&quot; instead of your actual name,
        that&apos;s a yellow flag. It&apos;s not definitive proof on its own —
        some legitimate emails use generic greetings — but combined with other
        warning signs, it adds up.
      </p>

      <h3>Be Suspicious of Attachments</h3>

      <p>
        Unexpected attachments are one of the most dangerous elements of
        phishing emails. A fake invoice PDF, a Word document with macros, or a
        zip file can all contain malware. If you weren&apos;t expecting an
        attachment from someone, don&apos;t open it. If it&apos;s supposedly
        from a coworker or vendor, verify with them directly before opening.
      </p>

      <h2>Phishing Isn&apos;t Just Email</h2>

      <p>
        Phishing has expanded well beyond your inbox. Text message phishing
        (&quot;smishing&quot;) uses fake texts claiming to be from your bank,
        a delivery service, or the IRS. Voice phishing (&quot;vishing&quot;)
        involves phone calls from people pretending to be tech support,
        government agencies, or your credit card company. You&apos;ll even see
        phishing links in social media messages and ads.
      </p>

      <p>
        The same principles apply everywhere: verify the source, don&apos;t
        click links from unexpected messages, and never give out personal
        information to someone who contacted you first.
      </p>

      <h2>What to Do If You Clicked a Phishing Link</h2>

      <p>
        If you think you&apos;ve fallen for a phishing attack, act fast.
        Change the password for any account you may have exposed — do it from
        a different device if possible. If you entered financial information,
        call your bank immediately and let them know. Enable two-factor
        authentication on every account that supports it if you haven&apos;t
        already.
      </p>

      <p>
        Run a full malware scan on your computer, especially if you downloaded
        an attachment. Monitor your accounts over the next few weeks for any
        unauthorized activity. And don&apos;t beat yourself up — phishing
        attacks are designed by professionals to trick people, and even
        tech-savvy users fall for them sometimes.
      </p>

      <h2>The Best Defense</h2>

      <p>
        No software can fully protect you from phishing because the attack
        targets your judgment, not your computer. The single best thing you can
        do is build a habit of pausing before you click. Every time you get an
        unexpected email asking you to take action, take ten seconds to ask:
        did I expect this? Does the sender address look right? Does this link
        go where it should?
      </p>

      <p>
        Beyond that, use a password manager so you have unique passwords for
        every account, turn on two-factor authentication everywhere you can,
        and keep your browser and operating system updated. These layers
        won&apos;t prevent you from clicking a bad link, but they limit the
        damage if you do.
      </p>

      <blockquote>
        <p>
          Worried you might have clicked something you shouldn&apos;t have?
          Bring your computer to FlexTech and we&apos;ll check it over. We can
          scan for malware, help you secure your accounts, and make sure
          nothing is lurking on your system.
        </p>
      </blockquote>
    </>
  ),
};

export default post;