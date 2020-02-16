# Copy this text into your `.bash` homework file. Copy and paste the code you successfully used into terminal below each prompt

# Open the **Terminal app**

# Create a new directory on your desktop called `galaxy_far_far_away`and enter it
Logannes-MacBook-Air:~ loganne$ cd Desktop
Logannes-MacBook-Air:Desktop loganne$ mkdir galaxy_far_far_away

# Create a directory called `death_star`

# and make the following files inside of it:
# darth_vader.txt
# princess_leia.txt
# storm_trooper.txt

Logannes-MacBook-Air:Desktop loganne$ mkdir death_star
Logannes-MacBook-Air:Desktop loganne$ cd death_star/
Logannes-MacBook-Air:death_star loganne$ touch darth_vader.txt
Logannes-MacBook-Air:death_star loganne$ touch princess_leia.txt
Logannes-MacBook-Air:death_star loganne$ touch storm_trooper.txt

# In `galaxy_far_far_away`, make a directory named `tatooine`
Logannes-MacBook-Air:death_star loganne$ cd ~
Logannes-MacBook-Air:~ loganne$ cd Desktop
Logannes-MacBook-Air:Desktop loganne$ cd galaxy_far_far_away/
Logannes-MacBook-Air:galaxy_far_far_away loganne$ mkdir tatooine

# and create the following files in it:
# luke.txt
# ben_kenobi.txt
Logannes-MacBook-Air:galaxy_far_far_away loganne$ cd tatooine
Logannes-MacBook-Air:tatooine loganne$ touch luke.txt
Logannes-MacBook-Air:tatooine loganne$ touch ben_kenobi.txt


# Inside of `tatooine` make a directory called `millenium_falcon`
# and in it create:
# han_solo.txt
# chewbaca.txt
Logannes-MacBook-Air:tatooine loganne$ mkdir millenium_falcon
Logannes-MacBook-Air:tatooine loganne$ cd millenium_falcon/
Logannes-MacBook-Air:millenium_falcon loganne$ touch han_solo.txt
Logannes-MacBook-Air:millenium_falcon loganne$ touch chewbaca.txt


# Rename `ben_kenobi.txt` to `obi_wan.txt
Logannes-MacBook-Air:millenium_falcon loganne$ cd ..
Logannes-MacBook-Air:tatooine loganne$ mv ben_kenobi.txt obi_wan.txt

# Copy `storm_trooper.txt` from `death_star` to `tatooine`
Logannes-MacBook-Air:death_star loganne$ cp ~/Desktop/death_star/storm_trooper.txt ~/Desktop/galaxy_far_far_away/tatooine

# Move `luke.txt` and `obi_wan.txt` to the `millenium_falcon`
Logannes-MacBook-Air:galaxy_far_far_away loganne$ mv ~/Desktop/galaxy_far_far_away/tatooine/luke.txt ~/Desktop/galaxy_far_far_away/tatooine/millenium_falcon/
Logannes-MacBook-Air:galaxy_far_far_away loganne$ mv ~/Desktop/galaxy_far_far_away/tatooine/obi_wan.txt ~/Desktop/galaxy_far_far_away/tatooine/millenium_falcon/

# Move `millenium_falcon` out of `tatooine` and into `galaxy_far_far_away`
Logannes-MacBook-Air:tatooine loganne$ mv ~/Desktop/galaxy_far_far_away/tatooine/millenium_falcon/ ~/Desktop/galaxy_far_far_away/

# Move `millenium_falcon` into `death_star`
Logannes-MacBook-Air:galaxy_far_far_away loganne$ mv ~/Desktop/galaxy_far_far_away/millenium_falcon/ ~/Desktop/death_star/

# Move `princess_leia.txt` into the `millenium_falcon`
Logannes-MacBook-Air:death_star loganne$ mv ~/Desktop/death_star/princess_leia.txt ~/Desktop/death_star/millenium_falcon/

# Delete `obi_wan.txt`
Logannes-MacBook-Air:millenium_falcon loganne$ rm /Users/loganne/Desktop/death_star/millenium_falcon/obi_wan.txt 

# In `galaxy_far_far_away`, make a directory called `yavin_4`
Logannes-MacBook-Air:galaxy_far_far_away loganne$ mkdir yavin_4

# Move the `millenium_falcon` out of the `death_star` and into `yavin_4`
Logannes-MacBook-Air:death_star loganne$ mv /Users/loganne/Desktop/death_star/millenium_falcon/ /Users/loganne/Desktop/galaxy_far_far_away/yavin_

# Make a directory in `yavin_4` called `x_wing`
Logannes-MacBook-Air:galaxy_far_far_away loganne$ cd yavin_4/
Logannes-MacBook-Air:yavin_4 loganne$ mkdir x_wing

# Move `princess_leia.txt` to `yavin_4` and `luke.txt` to `x_wing`
Logannes-MacBook-Air:millenium_falcon loganne$ mv /Users/loganne/Desktop/galaxy_far_far_away/yavin_4/millenium_falcon/princess_leia.txt /Users/loganne/Desktop/galaxy_far_far_away/yavin_4/x_wing
Logannes-MacBook-Air:millenium_falcon loganne$ mv /Users/loganne/Desktop/galaxy_far_far_away/yavin_4/millenium_falcon/luke.txt /Users/loganne/Desktop/galaxy_far_far_away/yavin_4/x_wing 

# Move the `millenium_falcon` and `x_wing` out of `yavin_4` and into `galaxy_far_far_away`
Logannes-MacBook-Air:yavin_4 loganne$ mv /Users/loganne/Desktop/galaxy_far_far_away/yavin_4/millenium_falcon /Users/loganne/Desktop/galaxy_far_far_away 
Logannes-MacBook-Air:yavin_4 loganne$ mv /Users/loganne/Desktop/galaxy_far_far_away/yavin_4/x_wing /Users/loganne/Desktop/galaxy_far_far_away 

# In `death_star`, create directories for `tie_fighter_1`, `tie_fighter_2` and `tie_fighter_3`
Logannes-MacBook-Air:Desktop loganne$ cd death_star/
Logannes-MacBook-Air:death_star loganne$ mkdir tie_fighter_1
Logannes-MacBook-Air:death_star loganne$  mkdir tie_fighter_2
Logannes-MacBook-Air:death_star loganne$  mkdir tie_fighter_3

# Move `darth_vader.txt` into `tie_fighter_1`
Logannes-MacBook-Air:death_star loganne$ mv /Users/loganne/Desktop/death_star/darth_vader.txt /Users/loganne/Desktop/death_star/tie_fighter_1 

# Make a copy of `storm_trooper.txt` in both `tie_fighter_2` and `tie_fighter_3`
Logannes-MacBook-Air:death_star loganne$ cp /Users/loganne/Desktop/death_star/storm_trooper.txt /Users/loganne/Desktop/death_star/tie_fighter_2 
Logannes-MacBook-Air:death_star loganne$ cp /Users/loganne/Desktop/death_star/storm_trooper.txt /Users/loganne/Desktop/death_star/tie_fighter_3 

# Move all of the `tie_fighters` out of the `death_star` and into `galaxy_far_far_away`
Logannes-MacBook-Air:death_star loganne$ mv /Users/loganne/Desktop/death_star/tie_fighter_1 /Users/loganne/Desktop/galaxy_far_far_away 
Logannes-MacBook-Air:death_star loganne$ mv /Users/loganne/Desktop/death_star/tie_fighter_2 /Users/loganne/Desktop/galaxy_far_far_away 
Logannes-MacBook-Air:death_star loganne$ mv /Users/loganne/Desktop/death_star/tie_fighter_3 /Users/loganne/Desktop/galaxy_far_far_away 

# Be careful with this command - cannot undo!

# Make sure you delete the right thing, or you could accidentally delete the contents of your computer (it has happened).

# This command will typically not ask you if you really want to delete. It will just delete so doublecheck you are deleting exactly what you mean to delete

# Remove `tie_fighters` 2 and 3.
Logannes-MacBook-Air:galaxy_far_far_away loganne$ rm -R tie_fighter_2
Logannes-MacBook-Air:galaxy_far_far_away loganne$ rm -R tie_fighter_3

# Touch a file in "**x_wing**" called "**the_force.txt**".
Logannes-MacBook-Air:x_wing loganne$ touch the_force.txt

# Destroy the "**death_star**" and anyone inside of it.
Logannes-MacBook-Air:Desktop loganne$ rm -R death_star/

# Return "**x_wing**" and the "**millenium_falcon**" to "**yavin_4**".
Logannes-MacBook-Air:galaxy_far_far_away loganne$ mv /Users/loganne/Desktop/galaxy_far_far_away/x_wing /Users/loganne/Desktop/galaxy_far_far_away/yavin_4 
Logannes-MacBook-Air:galaxy_far_far_away loganne$ mv /Users/loganne/Desktop/galaxy_far_far_away/millenium_falcon /Users/loganne/Desktop/galaxy_far_far_away/yavin_4 

# Celebrate!