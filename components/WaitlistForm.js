// components/WaitlistForm.js
import React, { useState } from 'react';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [discordUsername, setDiscordUsername] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [timezone, setTimezone] = useState('');
  const [hasDesktopAccess, setHasDesktopAccess] = useState(false);
  const [interestReason, setInterestReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., submit data to the server)
    // You can use a library like Axios or fetch() to make an API call.
    // Don't forget to validate the data before submitting it.
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Discord Username:</label>
        <input
          type="text"
          value={discordUsername}
          onChange={(e) => setDiscordUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Wallet Address(s):</label>
        <input
          type="text"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Time Zone:</label>
        <input
          type="text"
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Access to Desktop Browser:</label>
        <input
          type="checkbox"
          checked={hasDesktopAccess}
          onChange={(e) => setHasDesktopAccess(e.target.checked)}
        />
      </div>
      <div>
        <label>Why are you interested in playing World of Rogues?</label>
        <textarea
          value={interestReason}
          onChange={(e) => setInterestReason(e.target.value)}
          required
        />
      </div>
      <button type="submit">Join Waitlist</button>
    </form>
  );
};

export default WaitlistForm;