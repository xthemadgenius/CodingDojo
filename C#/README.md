# C# Stack Setup

to get into the my MYSQL server from powershell

C:\"Program Files"\MySQL\"MySQL Server 8.0"\bin

# Create C# Project

Manually:

mkdir PROJNAME

cd PROJNAME

dotnet new console

One line:

dotnet new console -o PROJNAME


To Update C# Project:

dotnet restore

To Run C# Project:

dotnet run

int	    Int32	    An integer value between -2,147,483,648 and 2,147,483,647	32-bits	40,000

long	Int64	    An integer between -9,223,372,036,854,775,808 and 9,223,372,036,854,775,807	64-bits	3,000,000,000

short	Int16	    An integer between -32,768 and 32,767	16-bits	342

float	Single	    A floating point number between -3.402823e38 and 3.402823e38	32-bits	3.14159f

double	Double	    A floating point number between -1.79769313486232e308 and 1.79769313486232e308. Allows more precision than a float.	64-bits	3.1415926535897932

char	Char	    One unicode character	16-bits	'g'

bool	Boolean	    A true or false value	8-bits	true
