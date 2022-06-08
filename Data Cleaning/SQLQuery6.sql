--Cleaning data in SQL

Select * from SQLPortfolio.dbo.NashvilleHousing

---------------------------------------------------------------------
--Standardized Date Format

Select SaleDateConverted, CONVERT(Date,SaleDate) from SQLPortfolio.dbo.NashvilleHousing

-- not working : Update NashvilleHousing set SaleDate = CONVERT(Date,SaleDate)

Alter Table NashvilleHousing
Add SaleDateConverted Date;

Update NashvilleHousing set SaleDateConverted = CONVERT(Date,SaleDate)

---------------------------------------------------------------------
--Populate Property Address Data

Select * from SQLPortfolio.dbo.NashvilleHousing
--where PropertyAddress is null
order by ParcelID

Select a.ParcelID, a.PropertyAddress, b.ParcelID, b.PropertyAddress, ISNULL(a.PropertyAddress,b.PropertyAddress)
from SQLPortfolio.dbo.NashvilleHousing a
join SQLPortfolio.dbo.NashvilleHousing b
on a.ParcelID = b.ParcelID and a.[UniqueID ] <> b.[UniqueID ]
where a.PropertyAddress is null

update a
set PropertyAddress = ISNULL(a.PropertyAddress,b.PropertyAddress)
from SQLPortfolio.dbo.NashvilleHousing a
join SQLPortfolio.dbo.NashvilleHousing b
on a.ParcelID = b.ParcelID and a.[UniqueID ] <> b.[UniqueID ]
where a.PropertyAddress is null

---------------------------------------------------------------------
--Breaking Address into Address, City, State

Select PropertyAddress from SQLPortfolio.dbo.NashvilleHousing

Select SUBSTRING(PropertyAddress, 1, CHARINDEX(',',PropertyAddress) -1) as Address,
SUBSTRING(PropertyAddress, CHARINDEX(',',PropertyAddress) +1, len(PropertyAddress)) as City 
from SQLPortfolio.dbo.NashvilleHousing

Alter Table NashvilleHousing
Add PropertySplitAddress Nvarchar(255);

Update NashvilleHousing set PropertySplitAddress = SUBSTRING(PropertyAddress, 1, CHARINDEX(',',PropertyAddress) -1)

Alter Table NashvilleHousing
Add PropertySplitCity Nvarchar(255);

Update NashvilleHousing set PropertySplitCity = SUBSTRING(PropertyAddress, CHARINDEX(',',PropertyAddress) +1, len(PropertyAddress))

Select OwnerAddress from SQLPortfolio.dbo.NashvilleHousing

Select PARSENAME(REPLACE(OwnerAddress, ',', '.'),3),
PARSENAME(REPLACE(OwnerAddress, ',', '.'),2),
PARSENAME(REPLACE(OwnerAddress, ',', '.'),1)
from SQLPortfolio.dbo.NashvilleHousing

Alter Table NashvilleHousing
Add OwnerSplitAddress Nvarchar(255);

Update NashvilleHousing set OwnerSplitAddress = PARSENAME(REPLACE(OwnerAddress, ',', '.'),3)

Alter Table NashvilleHousing
Add OwnerSplitCity Nvarchar(255);

Update NashvilleHousing set OwnerSplitCity = PARSENAME(REPLACE(OwnerAddress, ',', '.'),2)

Alter Table NashvilleHousing
Add OwnerSplitState Nvarchar(255);

Update NashvilleHousing set OwnerSplitState = PARSENAME(REPLACE(OwnerAddress, ',', '.'),1)

---------------------------------------------------------------------
--Change Y & N to Yes & No in 'SoldAsVacant'

Select Distinct(SoldAsVacant), count(SoldAsVacant) 
from SQLPortfolio.dbo.NashvilleHousing
group by SoldAsVacant order by 2

select SoldAsVacant,
case
	when SoldAsVacant = 'Y' then 'Yes'
	when SoldAsVacant = 'N' then 'No'
	else SoldAsVacant
end
from SQLPortfolio.dbo.NashvilleHousing

update NashvilleHousing
set SoldAsVacant = case
	when SoldAsVacant = 'Y' then 'Yes'
	when SoldAsVacant = 'N' then 'No'
	else SoldAsVacant
end

---------------------------------------------------------------------
--Remove Duplicates // Not Recommended

with RowNumCTE as
(Select *, ROW_NUMBER() over (partition by ParcelID, PropertyAddress, SalePrice, SaleDate, LegalReference order by UniqueID) row_num
from SQLPortfolio.dbo.NashvilleHousing)
delete from RowNumCTE where row_num>1

select * from RowNumCTE where row_num>1

---------------------------------------------------------------------
-- Remove Unused Column // Not Recommended for raw data

Select * from SQLPortfolio.dbo.NashvilleHousing

alter table SQLPortfolio.dbo.NashvilleHousing
drop column OwnerAddress, TaxDistrict, PropertyAddress, SaleDate



