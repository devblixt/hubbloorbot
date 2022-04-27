# hubbloorbot

A bot built by me to automate adding hubblebucks, a form of reputation points to members in the community. 

# How it works

1. Canny webhook is configured to send data to respective port once an event is triggered (any kind)
2. Events are filtered and 'Marked for Review' events are allowed through
3. Feedback data from Canny is scraped to find Discord Usernames
4. Usernames are spliced and keyword based search from Discord JS is used since Discord JS does not provide a direct way for converting usernames to user IDs
5. User objects on Discord are filtered through to find the correct object with corresponding username#discriminator and User ID is retrieved from the object 
6. UnbelievaBoat API Patch is used to add reputation points to the corresponding Discord ID
