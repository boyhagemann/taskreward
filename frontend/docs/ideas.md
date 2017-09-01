

## Timeline or breadcrumb path
Every lead has a history.
Make this visible thru the event stream

## Send mails to a lead from a list of templates...
Or sign them up for some scheduled mailing process.

## Every lead has its own page...
On this page the Profile can enter comments and status updates.
These updates can trigger payments.

## Integrate conversations thru mail,sms,chat
Maybe integrate with Smooch?

## Referrers can send messages to their own friends...
So they can do some pre work...
They can collect useful information and pass it thru to the Profile user.
This helps the conversation ratio.

## Enquiries / Tests
Have some enquiries or default questions for the possible client...

## Use a script for existing pages
Larger companies have their own landing pages.
Have a script on there, just like a chat box at the bottom.
Now the viewer can recommend someone, with motivation, on the page.
Or sign up himself...

## Integrate in chat as a bot
On existing chat pages, create a bot that handles all leads for you.
This can also be integrated on our own profile page.

## Example lead flow
- A views profile                                             createLead(user, profile)              (:User)-[:CREATES_LEAD]->(:Lead)
- A updates own account                                       updateUser(user)                       (:User)-[:UPDATES_USER]->(:User)
- A invites B                                                 createInvitation(user, profile)        (:User)-[:CREATES_INVITATION]->(:Lead)
- B views email                                               viewInvitation(lead)                   (:User)-[:VIEWS_EMAIL]->(:Email)
- B views profile                                             ...                                      
- B invites C with motivation                                 ...                                 
----------------------------------
- Company views lead                                          getLead(user, lead)                    (:User)-[:VIEWS_LEAD]->(:Lead)
- Company comments: "interesting, must call"                  commentLead(user, lead, message)       (:User)-[:COMMENTS_LEAD { message }]->(:Lead)
- Company makes Favorite                                      favoriteLead(user, lead)               (:User)-[:FAVORITES_LEAD]->(:Lead)
- Company unmakes Favorite                                    unfavoriteLead(user, lead)             (:User)-[:UNFAVORITES_LEAD]->(:Lead)
- Company sets status: Called                                 statusLead(user, lead, status)         (:User)-[:SETS_LEAD_STATUS]->(:Lead)
- Company comments: "had a great call, call back tomorrow"    ...                               
- Company comments: "person comes over to office"             ...                                  
- Company sends email message to B                            sendMessage(to, lead, message, medium) (:User)-[:SENDS_MESSAGE { message }]->(:Lead)
- B replies to mail                                           ...
- B has question and sends message thru website               ...
- Company sends sms message                                   ...
- Company sets status: Office visit                           ...
- Company comments: "gread conversation, looking good"        ...
- Company sets status: Sale product X                         ...
