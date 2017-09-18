

## User Interface
[x] User can login
[x] User can logout
[x] User can change his profile
[x] User can preview his profile page
[x] User can see a list of leads
[x] User can see a list of lead activity
[x] User can approve leads
[x] User can switch between profile and referer
[ ] User can change his password
[ ] User can decline/archive a lead
[ ] User can see a list of invoices
[ ] User can view or download an invoice
[ ] User can upload a page background image

## System
[x] System calculates rewards recursively
[ ] System can calculate a lead score
[ ] System updates store after mutation
[ ] System sends an email on lead creation
[ ] System can generate invoices every month
[ ] System can validate a creditcard or paypal field
[ ] System can check if an email address is real
[ ] System can check if a telephone number is real

## Profile page
[x] Referer can add a contact
[x] Referer can see already invited users
[x] Referer can motivate why he recommends a friend
[ ] Referer cannot invite a contact for the same profile more than once
[ ] Referer can view their share link
[ ] Referer can share the profile page directly on social media
[ ] Referer can sign up from a lead page
[ ] Referer can add extra lead information, like hobbies or job function

## Referer Interface
[x] Referer can see a list of participated leads
[x] Referer can see a list of rewards
[x] Referer can see the reward value that can be payed out
[ ] Referer can request a payment
[ ] Referer can see the status of one lead
[ ] Referer can see all activity for one lead
[ ] Referer can see a list of previous payments
[ ] Referer can update their account information
[ ] Referer can claim his reward


## Epics
Reward
Events
Dashboard


## Referer menu
- Profiles
- Rewards
- Payments
- Account
- Preferences


## Use immutable events/logs for below-----

1. Lead status/follow ups
- Viewed
- Called
- Emailed
- Is valid contact
- Comes over to the office
- Requests brochure
- Buys product X

2. Every
- more than / every

3. Count

## Rewards status/followup combined with count
- Receive 5 euro when delivering 20 valid contacts
- Receive 100 euro whene delivering 5 sales
- Receive 10 euros when delivering 1000 views
