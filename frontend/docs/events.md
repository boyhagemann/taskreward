

Event                                Owner Lead page                                  User x Contact stream                          User y Referer stream
-----------------------------------------------------------------------------------------------------------------------------------------------------
CreatedLead                          User x viewed the profile page                   You viewed the profile page                    User x viewed the profile page
CreatedLead({source:invitation})     User x invited user y                            You invited user y                             User x invited user y
AssignedReward                       You assigned user x some status                  ...                                            ...
ReceivedReward                       User y received a reward                         ??? User y received a reward                   You received a reward


Owner Lead page ( lead )
User Stream ( user leads and its children )




User     CREATED_LEAD          Lead
User     CREATED_INVITATION    Lead
User     ASSIGNED_REWARD       Reward
User     RECEIVED_REWARD       Reward
User     REQUESTS_PAYMENT      Payment
