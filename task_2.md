# UI Components – Task 2

Celem zadania jest stworzenie zestawu komponentów UI w React, wraz ze storiesami.
Komponenty mają być modularne, na podstawie podanego poniej API.
Nie pisz do nich CSS, a jedynie daj kazdemu klasę zgodna z nazwa komponentu.
Gotowy plik z CSSem dostarczę na najlbizszych sesjach.

---

## Komponenty do wykonania

### **Tag**

- warianty: `active`, `inactive`
- zachowuje się jak mały button

```tsx
<Tag active>Pink</Tag>
```

```tsx
<Tag onClick={() => console.log("clicked")}>Diamond</Tag>
```

### **Elevation**

```tsx
<Elevation>
  <div>Shadowed content</div>
</Elevation>
```

### **Chip**

- ikonka + tekst
- całość opakowana w `Elevation`

```tsx
<Chip icon={<DiamondIcon />}>0.14 Ct</Chip>
```

### **Button**

- rozmiary: `sm`, `md`, `lg`
- warianty: `primary`, `secondary`
- `onClick`
- opcja `iconOnly`
- opcjonalna ikona (`icon`)

```tsx
<Button size="md" variant="primary">
  Add to Cart
</Button>

<Button
  size="sm"
  variant="secondary"
  icon={<HeartIcon />}
  iconOnly
/>

<Button
  size="sm"
  variant="secondary"
  icon={<HeartIcon />}
  iconOnly
/>
```

### **Input**

- `value`, `onChange`
- slot na ikonę (`icon`)

```tsx
<Input value={search} onChange={setSearch} icon={<SearchIcon />} />
```

### **QuantitySelector**

- `value`, `onIncrement`, `onDecrement`

```tsx
<QuantitySelector
  value={1}
  onIncrement={() => setValue((v) => v + 1)}
  onDecrement={() => setValue((v) => v - 1)}
/>
```

### **Card** – komponenty:

- `CardTitle`
- `CardImage`
- `CardActions`

```tsx
<Card>
  <CardImage src="/pink-diamond.png" />

  <CardTitle>Pink Diamond</CardTitle>

  <CardActions>
    <Button size="sm">Buy</Button>
  </CardActions>
</Card>
```

### **Totals** – komponenty:

- `TotalsHeader`
- `TotalsItem`
- `TotalsSummary`

```tsx
<Totals>
  <TotalsHeader>Payment</TotalsHeader>

  <TotalsItem label="Item total" value="$1000" />

  <TotalsItem label="Delivery fee" value="$50" />

  <TotalsSummary label="Total" value="$1050" />
</Totals>
```

---
